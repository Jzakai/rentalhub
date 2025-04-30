

  document.addEventListener("DOMContentLoaded", function () {
    fetch("/properties")
      .then((res) => res.json())
      .then((data) => {
        const container = document.getElementById("property-container");
        if (!container) return;
  
        data.forEach((prop) => {
          const html = `
          <div class="col-lg-4 col-md-6 wow fadeInUp">
            <div class="property-item rounded overflow-hidden">
              <div class="p-4 pb-0">
                <h5 class="text-primary mb-3">SAR ${prop.price}</h5>
                <a class="d-block h5 mb-2" href="#">${prop.title}</a>
                <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${prop.location}</p>
              </div>
              <div class="d-flex border-top">
                <small class="flex-fill text-center border-end py-2">
                  <i class="fa fa-ruler-combined text-primary me-2"></i>${prop.area} Sqft
                </small>
              </div>
            </div>
          </div>`;
          container.innerHTML += html;
        });
      })
      .catch((err) => {
        console.error("Failed to load properties", err);
      });
  });
  