let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')


form.addEventListener('submit', (dets) => {
      dets.preventDefault();

      document.querySelector('#emailError').textContent = '';
      document.querySelector('#passwordError').textContent = '';



      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


      let emailans = emailRegex.test(email.value)
      let passwordans = passwordRegex.test(password.value)
      console.log(password.value);

      let isValid = true;

      if (!emailans) {
            document.querySelector('#emailError').textContent = 'Invalid email';
            isValid = false;
      }

      if (!passwordans) {
            document.querySelector('#passwordError').textContent = 'wrong password';
            isValid = false;
      }

      if(isValid){
            document.querySelector('#successMessage').textContent = 'Successful'
      }
})