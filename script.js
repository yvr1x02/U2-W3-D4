console.log("ciaooo");

const loadBtn = document.getElementById("btnDog");
const row = document.getElementById("row");

const URL = "https://api.pexels.com/v1/search?query=dog";
const API_KEY = "ynYZTskwmBd2jnqAGX7MS4NMaqllEknpJ4PIKAQB95VH599YpVOsZmvq";

const fetchImg = () => {
  fetch(URL, {
    method: "GET",
    headers: { Authorization: API_KEY },
  })
    .then((response) => response.json())
    .then((imgObj) => {
      console.log(imgObj.photos);
      displayImages(imgObj.photos);
    })
    .catch((err) => console.log(err));
};

const displayImages = (photos) => {
  photos.forEach((photo) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-4";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card mb-4 shadow-sm";

    const img = document.createElement("img");
    img.src = photo.src.medium;
    img.className = "bd-placeholder-img card-img-top";

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = photo.photographer;

    const cardText = document.createElement("p");
    cardText.className = "card-text";

    const btnGroupDiv = document.createElement("div");
    btnGroupDiv.className = "btn-group";

    const viewButton = document.createElement("button");
    viewButton.type = "button";
    viewButton.className = "btn btn-sm btn-outline-secondary";
    viewButton.textContent = "View";

    const hideButton = document.createElement("button");
    hideButton.type = "button";
    hideButton.className = "btn btn-sm btn-outline-secondary";
    hideButton.textContent = "Hide";

    const smallText = document.createElement("small");
    smallText.className = "text-muted";
    smallText.textContent = photo.id;

    btnGroupDiv.appendChild(viewButton);
    btnGroupDiv.appendChild(hideButton);

    const cardEndDiv = document.createElement("div");
    cardEndDiv.className = "d-flex justify-content-between align-items-center";
    cardEndDiv.appendChild(btnGroupDiv);
    cardEndDiv.appendChild(smallText);

    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardEndDiv);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);

    row.appendChild(colDiv);
  });
};

loadBtn.addEventListener("click", fetchImg);
