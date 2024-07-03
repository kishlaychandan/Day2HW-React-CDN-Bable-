function Heading() {
  return (
    <div class="heading">
      <div>
      <h1>Topic covered</h1>
      <p class="p">
        The following is a list of all the topics we cover in the MDN learning
        area
      </p>
      </div>
      <div>
        <a href="">Getting started with the web</a>
        <p>
          Provides a practical introduction to the web development for complete
          beginners
        </p>
      </div>
      <div>
        <a href="">HTML - Structuring the web</a>
        <p>
          HTML is the language thet we use to structure the different parts of
          our content and define what their meaning or purpose is This topic
          teaches HTML in detail.
        </p>
      </div>
      <div>
        <a href="">CSS - Styling the web</a>
        <p>
          CSS is the language that we use to control our web content's style and
          layout, as well as adding nehavior like animation. This provides
          comprehensive coverage of CSS.
        </p>
      </div>
    </div>
  );
}

ReactDOM.render(<Heading />, document.getElementById("root"));
