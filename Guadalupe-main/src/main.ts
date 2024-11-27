// ts/script.ts


function showAlert(productName: string): void {
  alert('Você escolheu o produto: ${productName}');
}


const productElements = document.querySelectorAll('.produto');

productElements.forEach((product) => {
  product.addEventListener('click', () => {
      const productName = (product.querySelector('h3') as HTMLElement).innerText;
      showAlert(productName);
  });
});