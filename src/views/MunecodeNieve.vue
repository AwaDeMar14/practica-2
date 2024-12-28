<template>
  <div>
    <div class="container" @mousemove="updateMousePosition">
      <img 
        :style="{ left: `${mouseX}px`, top: `${mouseY}px` }" 
        class="mouse-image" 
        src="../assets/circulo_borroso.png" 
        alt="Imagen"
      />
      <h2>El Muñeco de Nieve Encantado</h2>
      <br>
      <p>En un pequeño pueblo rodeado de montañas y pinos, donde el invierno reinaba casi todo el año, existía un muñeco de nieve diferente a todos los demás. Su nombre era Frost, y aunque a simple vista parecía un muñeco común, había algo mágico en él. Frost no era un simple conjunto de nieve y botones; en su interior vivía un corazón encantado, fruto de un hechizo olvidado por el tiempo.</p>
      <p>Frost había sido creado una noche de luna llena por una niña llamada Clara, que deseaba con todas sus fuerzas tener un amigo que nunca la abandonara. Usó la nieve más blanca que pudo encontrar, trozos de carbón para los ojos, una zanahoria para la nariz y una bufanda roja que perteneció a su abuela. Cuando terminó, exhaló un profundo suspiro y dijo: "Ojalá pudieras hablarme." En ese instante, una chispa mágica del cielo nocturno cayó sobre el muñeco, y Frost cobró vida.</p>
      <p>El muñeco de nieve no solo podía hablar, sino que también tenía una curiosidad infinita por el mundo. Adoraba escuchar las historias de Clara y aprender sobre los humanos, las estaciones y las estrellas. Sin embargo, Frost tenía un secreto: su existencia estaba ligada al invierno. Sabía que, cuando llegara la primavera, su cuerpo comenzaría a derretirse, y solo la magia más poderosa podría mantenerlo a salvo.</p>
      <p>Decidido a encontrar una solución, Frost emprendió una aventura con Clara. Juntos exploraron los rincones más mágicos del bosque, buscando a un sabio espíritu del invierno que, según las leyendas, podía conceder deseos a quienes demostraran valor y bondad. En su viaje, enfrentaron ventiscas, cruzaron ríos congelados y conocieron a criaturas fantásticas, como un zorro de hielo y un anciano búho que guardaba secretos antiguos.</p>
      <p>Al final, el espíritu del invierno apareció ante ellos, impresionado por la determinación y el amor entre Clara y Frost. Les ofreció una elección: conservar la magia del muñeco para siempre, pero al costo de que Clara olvidara todo sobre él, o permitir que Frost viviera una última primavera junto a su amiga, aceptando su destino.</p>
      <p>Con lágrimas en los ojos, Frost eligió lo segundo. Quería que Clara tuviera recuerdos felices de su amistad, aunque eso significara despedirse. La primavera llegó, y aunque Frost se desvaneció poco a poco, dejó en el corazón de Clara una lección inolvidable: el verdadero valor de la amistad y el sacrificio.</p>
      <p>Cada invierno, Clara construía un muñeco de nieve con la misma bufanda roja, y aunque nunca volvió a hablarle, siempre sentía que Frost estaba allí, en espíritu, sonriendo bajo las estrellas.</p>
    </div>

   
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0, 
      mouseY: 0
    };
  },
  methods: {
    updateMousePosition(event) {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    },
  },
};



</script>

<style scoped>
.container {
  display: block;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin: 0;
  padding: 0;
}

.mouse-image {
  position: absolute;
  pointer-events: none; 
  width: 100px; 
  height: 100px;
  transform: translate(-50%, -50%); 
}


h2, p {
  width: 100%;
  max-width: none; 
  margin: 0 auto; 
}


h2{
  color: #d5e1e1;
  text-align: center;
}

p{
  color: #f3f6f6;
  text-align: center;
}


</style>




