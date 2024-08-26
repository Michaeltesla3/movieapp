// Define the positions for each card container
let positions = [
    {left: "50%", top: "50%", zIndex: 5, width: "350px", height: "500px"}, // card-container-1
    {left: "35%", top: "50%", zIndex: 4, width: "300px", height: "450px"}, // card-container-2
    {left: "25%", top: "50%", zIndex: 2, width: "250px", height: "400px"}, // card-container-4
    {left: "75%", top: "50%", zIndex: 1, width: "250px", height: "400px"}, // card-container-5
    {left: "65%", top: "50%", zIndex: 3, width: "300px", height: "450px"}  // card-container-3
];

let containers = document.querySelectorAll('.card-container');

// Function to rotate the positions in the desired order
function rotatePositions() {
    let firstPosition = positions.shift(); // Remove the first position
    positions.push(firstPosition); // Add it to the end

    containers.forEach((container, index) => {
        container.style.transition = "all 1s ease"; // Add smooth sliding effect
        container.style.left = positions[index].left;
        container.style.top = positions[index].top;
        container.style.zIndex = positions[index].zIndex;
        container.style.width = positions[index].width;
        container.style.height = positions[index].height;
    });
}

// Rotate the positions every 2 seconds
setInterval(rotatePositions, 2000);
