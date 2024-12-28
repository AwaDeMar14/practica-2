<template>
  <div class="pinguh">
    <h2>Tito el pingüino</h2>
    <br>
    <h4>
      Había una vez un pequeño pingüino llamado Tito, que vivía en una isla remota, donde la nieve nunca dejaba de caer y el viento cortante soplaba constantemente. Tito era muy especial, no porque fuera más rápido o más fuerte que los demás, sino porque, por alguna razón, no podía dejar de tiritar de frío.

      Desde que nació, Tito nunca logró adaptarse al clima gélido de su hogar. Mientras los demás pingüinos correteaban por la nieve con sus plumas bien pegadas al cuerpo, él siempre estaba temblando. No importaba cuánto intentara acurrucarse junto a su familia o rodearse de otros pingüinos, el frío parecía atravesarlo, haciéndolo temblar sin cesar.
    </h4>

    <!-- Botón 1 y la imagen que aparece debajo de él -->
    <div class="botones-container">
      <button class="boton" @click="toggleImagen">Imagen</button>
    </div>

    <!-- Imagen que aparece debajo de Botón 1 -->
    <div v-if="imagenVisible" class="imagen-container">
      <img :src="pinguSad" alt="Pingu triste" />
    </div>

    <h4>
      Un día, mientras caminaba por la playa mirando cómo el sol apenas se asomaba en el horizonte, Tito se encontró con una extraña figura en la orilla. Era un pequeño zorrito ártico que parecía perdido. Tito, aunque tiritando, decidió acercarse.

      —Hola —dijo Tito con su voz temblorosa—. ¿Qué haces por aquí? ¿No tienes frío?

      El zorrito, que también estaba helado por el viento, levantó la mirada y sonrió.

      —Yo también tiritaba mucho, hasta que descubrí algo importante —respondió el zorrito—. El frío no lo podemos evitar, pero podemos aprender a enfrentarlo de una manera diferente.

      Intrigado, Tito preguntó: —¿Y cómo es eso?

      El zorrito comenzó a caminar hacia una pequeña cueva cerca de la playa. Tito, aunque tiritando más que nunca, lo siguió. Cuando llegaron dentro de la cueva, el zorrito le mostró algo sorprendente: en el interior había una llama tenue, un pequeño fuego que apenas calentaba el aire.

      —Aquí, el fuego me ayuda a estar más tranquilo —dijo el zorrito—. No me quita el frío, pero me da el valor para soportarlo. Si en lugar de enfocarme en lo que no puedo cambiar, busco pequeñas soluciones, el frío se vuelve más llevadero.
    </h4>

    <!-- Botón 2 y la imagen "pingu_cueva.png" -->
    <div class="botones-container">
      <button class="boton" @click="toggleImagenCueva">Imagen</button>
    </div>

    <!-- Imagen que aparece debajo de Botón 2 -->
    <div v-if="imagenCuevaVisible" class="imagen-container">
      <img :src="pinguCueva" alt="Pingu en la cueva" />
    </div>

    <h4>
      Tito, aunque no comprendía del todo, decidió probar. Se sentó cerca del fuego, sus temblores comenzaron a disminuir y, por primera vez, se dio cuenta de que, aunque el frío seguía allí, no se sentía tan abrumador.

      Desde ese día, Tito dejó de preocuparse tanto por su frío constante. Aprendió que a veces, aunque no podamos cambiar algo, sí podemos encontrar maneras de enfrentarlo. A veces, solo hace falta un poco de calor, no en el cuerpo, sino en el corazón.

      Y así, Tito siguió viviendo en su isla congelada, pero ya no tiritaba tanto, porque había aprendido a encontrar pequeños refugios de calor en su día a día, como el fuego en la cueva y, sobre todo, la amistad del zorrito que le enseñó a ser valiente frente al frío.

      Fin.
    </h4>

    <!-- Botón 3 y la imagen "pingu_japi.png" -->
    <div class="botones-container">
      <button class="boton" @click="toggleImagenJapi">Imagen</button>
    </div>

    <!-- Imagen que aparece debajo de Botón 3 -->
    <div v-if="imagenJapiVisible" class="imagen-container">
      <img :src="pinguJapi" alt="Pingu feliz" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pingu',
  data() {
    return {
      imagenVisible: false, // Propiedad que controla si la imagen del pingu triste se muestra o no
      imagenCuevaVisible: false, // Propiedad que controla si la imagen de Pingu en la cueva se muestra o no
      imagenJapiVisible: false, // Propiedad que controla si la imagen de Pingu feliz se muestra o no

      // Ruta de las imágenes usando require
      pinguSad: require('@/assets/pingu_sad.png'),
      pinguCueva: require('@/assets/pingu_cueva.png'),
      pinguJapi: require('@/assets/pingu_japi.png'),
    };
  },
  methods: {
    toggleImagen() {
      this.imagenVisible = !this.imagenVisible; // Alterna el valor de imagenVisible
    },
    toggleImagenCueva() {
      this.imagenCuevaVisible = !this.imagenCuevaVisible; // Alterna el valor de imagenCuevaVisible
    },
    toggleImagenJapi() {
      this.imagenJapiVisible = !this.imagenJapiVisible; // Alterna el valor de imagenJapiVisible
    }
  }
};
</script>

<style scoped>
.pinguh h4 {
  font-size: 18px; /* Tamaño del texto */
  line-height: 1.6; 
  font-family: 'Arial', sans-serif; /* Fuente legible */
  color: #333; /* Color oscuro para buena legibilidad */
  margin: 30px; /* Espaciado alrededor del texto */
  padding: 10px; /* Relleno interno */
}

.botones-container {
  display: flex;          
  gap: 20px; /* Espaciado entre los botones */
  justify-content: center;            
  margin-top: 20px;     
  position: relative;
  animation: mover-botones 2s ease-in-out infinite; /* Animación más rápida */
}

@keyframes mover-botones {
  0% {
    transform: translateX(-10vw);
  }
  50% {
    transform: translateX(10vw); /* Desplazamiento a la derecha de toda la pantalla */
  }
  100% {
    transform: translateX(-10vw); /* Regreso a la posición inicial */
  }
}

.boton {
  padding: 10px 20px;   
  background-color: rgb(89, 186, 218); 
  color: white;           
  border: none;           
  border-radius: 5px;    
  cursor: pointer;       
  transition: background-color 0.3s; 
}

.boton:hover {
  background-color: rgb(51, 117, 140); /* Color de fondo al pasar el cursor */
}

/* Estilo para las imágenes */
.imagen-container {
  text-align: center; /* Centra la imagen */
  margin-top: 20px; /* Espacio encima de la imagen */
}

img {
  display: block;
  margin: 0 auto;
  width: 400px; /* Tamaño de la imagen */
}
</style>
