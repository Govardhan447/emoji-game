import './index.css'

const WinOrLoseCard = props => {
  const {playGame, scoreEmojisList, macthingEmojiStatus} = props
  const gameStatus =
    scoreEmojisList.length === 12 && macthingEmojiStatus ? 'true' : 'false'
  const scoreMode = scoreEmojisList.length === 12 ? 'Best Score' : 'Score'
  const statusImg =
    scoreEmojisList.length === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onclickPlayAgain = () => {
    const status = true
    playGame(status)
  }

  return (
    <div className="win-loss-container">
      <div className="score-container-final">
        {gameStatus === 'true' ? (
          <h1 className="header-title">You Won</h1>
        ) : (
          <h1 className="header-title">You Lose</h1>
        )}
        <div className="score-by-container">
          <p className="score-header">{scoreMode}</p>
          <p className="score-card">{scoreEmojisList.length}/12</p>
          <button
            className="button-play"
            type="button"
            onClick={onclickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <div>
        <img src={statusImg} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
