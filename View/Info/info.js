  // Get the canvas element from the DOM
  var canvas = document.getElementById("myCanvas");
      
  // Get the 2D drawing context for the canvas
  var ctx = canvas.getContext("2d");
  
  // Define an array to hold the particles
  var particles = [];
  
  // Define the Particle constructor function
  function Particle(x, y, vx, vy, radius, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.color = color;
  }
  
  // Define the draw function to draw the particles on the canvas
  function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Loop through the particles array and draw each particle
    particles.forEach(function(particle) {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Update the particle's position based on its velocity
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Reverse the particle's velocity if it hits the edges of the canvas
      if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
        particle.vx = -particle.vx;
      }
      if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
        particle.vy = -particle.vy;
      }
    });
  }
  
  // Define the main animation loop
  function animate() {
    // Create a new particle and add it to the particles array if there are less than 1000 particles
    if (particles.length < 100) {
      var particle = new Particle(canvas.width / 2, canvas.height / 2, Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 10, "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")");
      particles.push(particle);
    }
    
    // Remove particles that exceed the limit of 1000
    while (particles.length > 100) {
      particles.shift();
    }
    
    // Call the draw function to draw the particles on the canvas
    draw();
    
    // Call the animate function recursively
    requestAnimationFrame(animate);
  }
  
  // Start the animation loop
  animate();