const Section = function (props) {
  const { title } = props;

  return (
    <div className={props.className}>
      {title ? <h2>{title}</h2> : ''}
      {props.children}
    </div>
  );
};

export default Section;
