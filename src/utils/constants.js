function generateArray() {
  const arr = [];
  const totalElements = 100;
  
  for (let i = 0; i < totalElements; i++) {
    arr.push({
      name: "XYZ",
      initialImg: `https://picsum.photos/200/${300 + i}?blur=2`,
      hoverImage: `https://picsum.photos/200/${300 + i}`,
      data: {
        name:"HOUSE-M",
        category:"DESIGN",
        year:2000+i,
        status:"COMPLETE",
        location:"INDIA",
        img:[`https://picsum.photos/id/${200+i}/700/400`,`https://picsum.photos/id/${230+i}/700/400`,`https://picsum.photos/id/${300+i}/700/400`],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis voluptate, porro quae rem veritatis voluptatem, 
        esse optio laudantium necessitatibus voluptates animi quidem magni! Laboriosam modi earum perspiciatis reprehenderit asperiores magnam minima 
        assumenda, vitae aut aliquam illo aliquid. Velit quibusdam tempora, laudantium neque nisi aperiam unde, impedit suscipit alias enim eius omnis 
        corrupti. Temporibus quidem fuga assumenda accusamus sequi sed ipsa corporis neque, voluptates porro explicabo adipisci eaque illo suscipit 
         molestiae numquam, dolores obcaecati perferendis est molestias impedit omnis veniam? Expedita aspernatur neque repudiandae voluptates blandi
         tiis doloremque iure nesciunt deleniti eum repellendus a, dolores aut natus pariatur voluptatem nemo id reiciendis dicta autem voluptate, quam
          vero tenetur. Dolorum delectus libero earum inventore voluptates nemo recusandae tempora, sapiente eaque in ducimus id veritatis? Voluptatibus asperiores
           totam facilis ipsam, soluta, quod molestiae enim atque, dolore harum eaque. Autem eveniet impedit repudiandae porro soluta nemo vero quod commodi accusamus 
           natus dignissimos dolores tempora magni a, facere necessitatibus laboriosam alias omnis inventore ad labore. Maxime eveniet corrupti expedita quae doloremque 
           in architecto, consectetur rem a omnis harum pariatur placeat provident! Officiis iure quod incidunt. 
          Est veniam quos pariatur in ad, molestiae, praesentium blanditiis ullam recusandae facilis deserunt laborum, quia quam. Eaque, animi eos.
        `}
    });
  }
  return arr;
}
export const arr = generateArray();


function generateArray1() {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push({
      name: "XYZ",
      initialImg: `https://picsum.photos/200/${300 + i}?blur=2`,
      hoverImage: `https://picsum.photos/200/${300 + i}`,
      data: {
        name:"HOUSE-M",
        category:"DESIGN",
        year:2000+i,
        status:"COMPLETE",
        location:"INDIA",
        img:[`https://picsum.photos/id/${200+i}/700/400`,`https://picsum.photos/id/${230+i}/700/400`,`https://picsum.photos/id/${360+i}/700/400`,`https://picsum.photos/id/${330+i}/700/400`,`https://picsum.photos/id/${400+i}/700/400`],
        description: `at FlowParserMixin.parseExprSubscripts (C:\Users\lavku\Desktop\Github Clone\Portfolio-Website\frontend\node_modules\@babel\parser\lib\index.js:10568:23)
    at FlowParserMixin.parseUpdate (C:\Users\lavku\Desktop\Github Clone\Portfolio-Website\frontend\node_modules\@babel\parser\lib\index.js:10551:21)`,
      }
    });
  }
  
  return arr;
}
export const arr1 = generateArray1();