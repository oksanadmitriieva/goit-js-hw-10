
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');


form.addEventListener('submit', handleCreate);


function handleCreate(event) {
  event.preventDefault();

  const dataDelay = event.target.elements.delay.value;
  const ratioBnt = event.target.elements.state.value;

  function createNotification(dataDelay) {
    return new Promise((res, rej) => {
      const delay = Number(dataDelay);
      setTimeout(() => {
        if (ratioBnt === 'fulfilled') {
          res(delay);
        } else {
          rej(delay);
        }
      }, delay);
    });
  }

 
  createNotification(dataDelay)
    .then(value => {
   
      iziToast.show({
        message: `✅ Обещание выполнено за ${dataDelay} мс`,
        messageColor: '#ffffff',
        color: '#65B741',
        position: 'topRight',
        progressBarColor: '#ffffff',
        close: false,
      });
    })
    .catch(error => {
      
      iziToast.show({
        message: `❌ Обещание отклонено за ${dataDelay} мс`,
        messageColor: '#ffffff',
        color: '#FF6868',
        position: 'topRight',
        progressBarColor: '#ffffff',
        close: false,
      });
    });
}