/* eslint-disable react/prop-types */
import "./CardSearchPrompt.scss";
export default function CardSearchPrompt({ titleCard, paragraphText }) {
  return (
    <div className="search-prompt-card">
      <div className="search-prompt-content">
        <h2 className="h-search-prompt-content">{titleCard}</h2>
        <p className="p-search-prompt-content">{paragraphText}</p>
      </div>
    </div>
  );
}
