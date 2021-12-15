const Section = function (props) {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Section;
