export default function APICard ({Quote, AuthorName}) {
    return (
      <div className="AnimeCard componentBox">
        <h1> {Quote} </h1>
        <p> {AuthorName} </p>

      </div>
    );
  }