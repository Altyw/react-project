import SectionItem from "./SectionItem";

function Section({ arr }) {
  console.log(arr);
  return arr.map((item) => {
    return (
      <SectionItem
        key={item.id}
        id={item.id}
        name={item.name}
        last={item.lastName}
        age={item.age}
      />
    );
  });
}

export default Section;
