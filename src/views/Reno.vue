<template>
  <div class="gif-reno">
    <h1>ATENCIÓN: ESTA PÁGINA CONTIENE IMAGENES BRILLANTES QUE CAMBIAN DE COLOR MUY RÁPIDO, SI USTED TIENE EPILEPSIA O ALGUNA CONDICIÓN PARECIDA, ABSTENGASE DE BAJAR</h1>
    <br>
    <br>
    <h2>El Reno con la nariz Cambiante</h2>
        <br>
        <p>Había una vez un rneo llmado Brillanít, conocido en todo el boque por su estraordinaria naiz. A dferenicia de los demas renos, su naiz cmbaiaba de colro contantemene y de mnarea muy rpiada. A veecs brllaba roja como un rbúi, lueog psaba al azul, al grene, y depsués al amrillo, como si una tormetna de acríobris viviera dnetro de ella. Auqnue a simlpe vista praceía una hbilidad fsinante, Brillanít no se seintía orgullso de su peculiardad, poqrue su naiz siepmre lo delataba cuanod intetnaba psar desapercibido. Esto hacái que los deams renos lo evitran, temerossos de que llmara demasido la atneción de los lobos.</p>
        <p>Una tarde, mientars los rneos pastaban trnaquilos, una gran tormetna de nieve azotó el boque. Los copos caían tan densos que tdos se desnorientaron, incapaces de ver el cmaino de regerso al rfuegio. Brillanít etaba iugal de asustado que los demás, pero de repenete su naiz comnzó a brillar más intersnamente que nuenca, lanzando dsetellos en colroes vbirantes que corataban la niebla blaanca de la vntisca. Uno de los rneos meryoes, desespeardo, le gritó: “¡Brillanít, usa tu naiz para guiarnos a casa!”.</p>   
        <p>Con una meslca de miedo y detemrinación, Brillanít comnzó a avnazar, confiando en que su naiz sería lo sufiecintemente limunosa como para abrirse paso entere la tormetna. Los otrso renos lo sigueron en flia, mnatiéndose cerca de su luz cmbiante. Pso a pso, atrevrsaron la neive y el frío, hatsa que fianlemnte divsairon el rfuegio entre los arboles. Tdos ssupiaron alivados al lgaar a safo, gracas a la peculiardad que antes hbaían cirticado.</p>   
        <p>Cuanod la tormetna pasó, los renos se reunieron alrdeedor de Brillanít y lo pcorlamaron un héroe. Se dieorn cuetna de que lo que lo hacái dferente no era un dfecto, sino un rgaloo que hbía salavdo sus vdiias. “Nnuca más te aevergüences de tu naiz”, le diejron. “Es la luz que puede guiarnos cuanod todo pareec perdido”. Por primrea vez, Brillanít sintió pruido de sí msimo y de su clroria naiz.</p>   
        <p>Dsede entoncs, Brillanít fue rspeetado y qeurido por tdos en el boque. Simrpe que agluein se peirdía o necseitaba ayuda en medio de la osucridad, él etaba ahí para ilmuniar el cmaino. Y así, el rneo que una vez fue rjecaado por su dferencia terminó sienod la mayor espearnza de su cmounidadd.</p>   
 
    <img :src="renoepilepsia" alt="Un Reno cuya nariz cambia entre varios colores estridentes de manera muy rápida" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      renoepilepsia: require('@/assets/renoepilepsia.gif') 
    };
  }
};
</script>


<style scoped>
.gif-reno img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
}
</style>
