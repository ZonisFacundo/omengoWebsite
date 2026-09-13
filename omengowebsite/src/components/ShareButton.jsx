import { useState } from 'react'
import Icon from './Icon'
import { SITE_DESCRIPTION } from '../config/site'

// Lee la URL y el título de la página actual en el momento del click (no
// al renderizar), así funciona igual en cualquier página del sitio
// (restaurantes, clínicas, la que se sume después) sin tener que pasarle
// esos datos a mano desde cada una.
export default function ShareButton({ text = SITE_DESCRIPTION }) {
  const [feedback, setFeedback] = useState('')

  async function handleShare() {
    const shareData = {
      title: document.title,
      text,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        // La persona canceló el share nativo: no hacemos nada.
      }
      return
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareData.url)
        setFeedback('¡Link copiado!')
        setTimeout(() => setFeedback(''), 2500)
      } catch {
        setFeedback(shareData.url)
      }
    }
  }

  return (
    <div className="share-button">
      <button type="button" className="share-button__trigger" onClick={handleShare}>
        <Icon name="share" size={18} />
        Compartir
      </button>
      <span className="share-button__feedback" role="status">
        {feedback}
      </span>
    </div>
  )
}
