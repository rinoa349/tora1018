let images = document.querySelectorAll(`.image-main`);

for (const [key, value] of Object.entries(images)) {

  value.animate(
    [
      {
        offset: 0.0,
        opacity: '0'
      },
      {
        offset: 0.1,
        opacity: '1'
      },
      {
        offset: 0.9,
        opacity: '1'
      },
      {
        offset: 1.0,
        opacity: '0'
      }
    ],
    {
      duration: 15000,
      delay: key * 5000,
      iterations: Infinity
    }
  );
  
}