/**
 * Dealer Locator Component
 * Modular dealer finder with map integration, search, and filtering
 * 
 * Dependencies:
 * - Google Maps API
 * - dealerLocations array (from locations.js)
 * - mapConfig object (from locations.js)
 * 
 * Usage:
 * 1. Include dealer-locator.css
 * 2. Include locations.js
 * 3. Include this file
 * 4. Call DealerLocator.init() after DOM is ready
 */

const DealerLocator = {
  // Component state
  map: null,
  markers: [],
  locations: null,
  filteredLocations: null,
  filteredMarkers: [],

  /**
   * Initialize the dealer locator component
   */
  init() {
    // Get locations from global scope
    this.locations = window.dealerLocations || [];
    this.filteredLocations = this.locations;

    // Load Google Maps and initialize search
    this.loadGoogleMaps();
    this.initSearch();
  },

  /**
   * Initialize Google Maps
   */
  initMap() {
    // Create map
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: window.mapConfig?.defaultZoom || 11,
      center: window.mapConfig?.defaultCenter || { lat: 30.2689191, lng: -81.6196011 },
    });

    // Create dealer list
    const dealerItems = document.getElementById('dealer-items');
    if (dealerItems) {
      dealerItems.innerHTML = '';
    }

    this.locations.forEach((location, index) => {
      // Create marker
      const marker = new google.maps.Marker({
        position: location.position,
        map: this.map,
        title: location.info.name
      });

      // Marker click event
      marker.addListener('click', () => {
        this.showDealerDetails(location, index);
        this.map.panTo(location.position);
        this.map.setZoom(15);
      });

      this.markers.push(marker);

      // Create sidebar item
      if (dealerItems) {
        const dealerItem = document.createElement('div');
        dealerItem.className = 'dealer-item';
        dealerItem.innerHTML = `
          <h5>${location.info.name}</h5>
          <p>${location.info.address || 'Address not available'}</p>
          <p class="pb-2">${location.info.phone || 'Phone not available'}</p>
            ${location.info.website ? `<a href="${location.info.website}" target="_blank" class="btn-secondary">Visit Website</a>` : ''}
        `;

        dealerItem.addEventListener('click', () => {
          this.showDealerDetails(location, index);
          this.map.panTo(location.position);
          this.map.setZoom(15);
        });

        dealerItems.appendChild(dealerItem);
      }
    });
  },

  /**
   * Show dealer details and update active states
   */
  showDealerDetails(location, index) {
    const detailsDiv = document.querySelector('.dealer-details');
    const info = location.info;
    

    // Update active state
    document.querySelectorAll('.dealer-item').forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });

    // Scroll to the selected dealer item in the sidebar
    const activeItem = document.querySelector('.dealer-item.active');
    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  },

  /**
   * Filter dealers based on search criteria
   */
  filterDealers(searchTerm, filterType) {
    const searchSpinner = document.getElementById('search-spinner');
    const dealerItems = document.getElementById('dealer-items');
    
    // Show spinner
    if (searchSpinner) {
      searchSpinner.style.display = 'flex';
    }
    if (dealerItems) {
      dealerItems.style.opacity = '0.5';
    }

    // Simulate processing time for better UX
    setTimeout(() => {
      const lowerSearchTerm = searchTerm.toLowerCase().trim();
      
      // Filter locations based on search criteria
      this.filteredLocations = this.locations.filter(location => {
        if (!lowerSearchTerm) return true; // Show all if no search term
        
        const name = (location.info.name || '').toLowerCase();
        const address = (location.info.address || '').toLowerCase();
        
        switch (filterType) {
          case 'name':
            return name.includes(lowerSearchTerm);
          case 'address':
            return address.includes(lowerSearchTerm);
          case 'all':
          default:
            return name.includes(lowerSearchTerm) || address.includes(lowerSearchTerm);
        }
      });

      // Update the dealer list display
      this.updateDealerList();
      this.updateMapMarkers();

      // Hide spinner
      if (searchSpinner) {
        searchSpinner.style.display = 'none';
      }
      if (dealerItems) {
        dealerItems.style.opacity = '1';
      }
    }, 300); // Small delay to show spinner
  },

  /**
   * Update the dealer list display with filtered results
   */
  updateDealerList() {
    const dealerItems = document.getElementById('dealer-items');
    if (!dealerItems) return;

    dealerItems.innerHTML = '';

    this.filteredLocations.forEach((location, index) => {
      const dealerItem = document.createElement('div');
      dealerItem.className = 'dealer-item';
      dealerItem.innerHTML = `
        <h5>${location.info.name}</h5>
        <p>${location.info.address || 'Address not available'}</p>
        <p class="pb-2">${location.info.phone || 'Phone not available'}</p>
          ${location.info.website ? `<a href="${location.info.website}" target="_blank" class="btn-secondary">Visit Website</a>` : ''}
      `;

      dealerItem.addEventListener('click', () => {
        const originalIndex = this.locations.indexOf(location);
        this.showDealerDetails(location, originalIndex);
        this.map.panTo(location.position);
        this.map.setZoom(15);
      });

      dealerItems.appendChild(dealerItem);
    });
  },

  /**
   * Update map markers visibility based on filtered results
   */
  updateMapMarkers() {
    // Hide all markers first
    this.markers.forEach(marker => marker.setVisible(false));
    
    // Show only filtered markers
    this.filteredMarkers = [];
    this.filteredLocations.forEach(location => {
      const originalIndex = this.locations.indexOf(location);
      const marker = this.markers[originalIndex];
      if (marker) {
        marker.setVisible(true);
        this.filteredMarkers.push(marker);
      }
    });
  },

  /**
   * Initialize search functionality
   */
  initSearch() {
    const searchInput = document.getElementById('dealer-search');
    const searchFilter = document.getElementById('search-filter');
    const resetButton = document.getElementById('reset-map');
    
    // Add event listeners
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.filterDealers(searchInput.value, searchFilter?.value || 'all');
      });
    }
    
    if (searchFilter) {
      searchFilter.addEventListener('change', () => {
        this.filterDealers(searchInput?.value || '', searchFilter.value);
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', () => {
        this.resetMapView();
      });
    }
  },

  /**
   * Reset map view to default state
   */
  resetMapView() {
    // Clear search input
    const searchInput = document.getElementById('dealer-search');
    const searchFilter = document.getElementById('search-filter');
    
    if (searchInput) {
      searchInput.value = '';
    }
    if (searchFilter) {
      searchFilter.value = 'all';
    }
    
    // Reset filtered locations to show all
    this.filteredLocations = this.locations;
    
    // Update displays
    this.updateDealerList();
    this.updateMapMarkers();
    
    // Reset map view to default (using responsive config)
    if (this.map) {
      console.log('Reset clicked - window.innerWidth:', window.innerWidth);
      console.log('getResponsiveMapConfig available:', typeof window.getResponsiveMapConfig);
      const responsiveConfig = window.getResponsiveMapConfig ? window.getResponsiveMapConfig() : window.mapConfig;
      console.log('Config being used:', responsiveConfig);
      this.map.setCenter(responsiveConfig?.defaultCenter || { lat: 30.2689191, lng: -81.6196011 });
      this.map.setZoom(responsiveConfig?.defaultZoom || 11);
      console.log('Map center set to:', responsiveConfig?.defaultCenter, 'zoom:', responsiveConfig?.defaultZoom);
    }
    
    // Deselect any active dealer items
    document.querySelectorAll('.dealer-item').forEach(item => {
      item.classList.remove('active');
    });
  },

  /**
   * Load Google Maps API
   */
  loadGoogleMaps() {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) { 
      this.initMap();
      return;
    }

    // Set up callback
    window.initDealerMap = () => {
      this.initMap();
    };

  }
};

// Auto-initialize when DOM is ready if not already initialized
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure other scripts are loaded
    setTimeout(() => {
      if (typeof window.dealerLocations !== 'undefined') {
        DealerLocator.init();
      }
    }, 100);
  });
} else {
  // DOM is already ready
  setTimeout(() => {
    if (typeof window.dealerLocations !== 'undefined') {
      DealerLocator.init();
    }
  }, 100);
}

// Export for manual initialization
window.DealerLocator = DealerLocator;