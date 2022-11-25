let animals = new Map();
animals.set("кошка", "мяу");
animals.set("собака", "гав");
animals.set("корова", "муу");
animals.set("гусь", "га-га-га");
animals.set("лиса", "unknown sound");

for (let animal of animals.keys()){
    console.log(animal + " говорит " + animals.get(animal));
}
