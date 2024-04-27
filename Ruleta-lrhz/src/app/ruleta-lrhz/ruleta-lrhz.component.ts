import { Component } from '@angular/core';

@Component({
  selector: 'app-ruleta-lrhz',
  standalone: true,
  imports: [],
  templateUrl: './ruleta-lrhz.component.html',
  styleUrl: './ruleta-lrhz.component.css'
})
export class RuletaLrhzComponent {
  spinWheel() {
    const wheel = document.getElementById('wheel-img');
    
    if (wheel) {
      let totalRotation = 0;
      const minRotation = 1800; // Mínimo de vueltas (5 vueltas completas)
      const maxRotation = 3600; // Máximo de vueltas (10 vueltas completas)
      const randomAngle = Math.floor(Math.random() * (maxRotation - minRotation + 1)) + minRotation; // Genera un ángulo aleatorio entre minRotation y maxRotation
      const clockwise = true; // Rotación en sentido horario
      
      const deg = Math.random() * 10 + 10; // Ángulo aleatorio entre 10 y 20 grados para una rotación más dinámica
      totalRotation += clockwise ? deg : -deg; // Asegura que la rotación sea siempre positiva (en sentido horario)
      wheel.style.transition = 'none'; 
      wheel.style.transform = `rotate(${totalRotation}deg)`; 
      
      setTimeout(() => {
        wheel.style.transition = 'transform 3s ease'; 
        const interval = setInterval(() => {
          totalRotation += clockwise ? deg : -deg; 
          wheel.style.transform = `rotate(${totalRotation}deg)`; 
          
          if (totalRotation >= randomAngle) { // Detiene la rotación cuando alcanza el ángulo aleatorio
            clearInterval(interval);
          }
        }, 10); 
      }, 100); 
    }
  }
  
  playSound() {
    const audio = new Audio();
    audio.src = "./assets/sonidos/ruleta.mp3";
    audio.load();
    audio.play();
  }
}
