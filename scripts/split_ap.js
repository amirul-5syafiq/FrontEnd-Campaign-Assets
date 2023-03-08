const main = () => {
   let tagging = process.argv[2];
   console.log(tagging.split("-")[0].split("v")[1]);
}

main();