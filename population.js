//this is where the population of songs will be stored

//Population Constructer
function Population(){
  this.songs = [];
  this.popsize = 10;
  this.matingpool = [];
  this.generations = 0; //1 as first?

  for (var i = 0; i < this.popsize; i++) {
    this.songs[i] = new Song();
  }

  this.selection = function() {
    for (var i = 0; i < this.songs.length; i ++) {
      var a = floor(random(this.matingPool.length));
      var b = floor(random(this.matingPool.length));
      var partnerA = this.matingPool[a];
      var partnerB = this.matingPool[b];
      var child = partnerA.crossover(parentB);
      child.mutate(this.mutationRate);
      this.songs[i] = child;
    }
    this.generations ++;
  }

  this.crossover = function(partner) {
    var child = new Song(this.genes.length); //genes refers to contents of song (instr and midi)
    for (car i = 0; < this.genes.length; i++) {
      if (random(0,1) > 0.5) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }
    return child;
  }

  this.mutate = function(mutationRate) {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = floor(random(0, 10));
      }
    }
  }
}
