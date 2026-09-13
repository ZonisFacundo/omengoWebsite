export default function ChatMockup({ headerName, headerAvatar, ariaLabel, messages }) {
  return (
    <div className="chat-mockup" role="img" aria-label={ariaLabel}>
      <div className="chat-mockup__header">
        <span className="chat-mockup__avatar" aria-hidden="true">
          {headerAvatar}
        </span>
        <div>
          <p className="chat-mockup__name">{headerName}</p>
          <p className="chat-mockup__status">en línea · responde al instante</p>
        </div>
      </div>
      <ul className="chat-mockup__thread" aria-hidden="true">
        {messages.map((message, index) => (
          <li
            key={index}
            className={`chat-bubble chat-bubble--${message.from}`}
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
