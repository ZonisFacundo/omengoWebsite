import { BRAND_NAME } from '../config/site'

/**
 * Isologo real de Omengo (public/logo-omengo.png): PNG con el fondo
 * quitado a partir del archivo que pasaron, recortado al anillo. Es el
 * único lugar del código donde vive la marca gráfica — el favicon
 * (public/favicon.png) es la misma imagen en otra resolución.
 */
export function LogoMark({ size = 40, className, decorative = true }) {
  return (
    <img
      src="/logo-omengo.png"
      width={size}
      height={size}
      className={className}
      alt={decorative ? '' : `Isologo de ${BRAND_NAME}`}
    />
  )
}

export default function Logo({ withWordmark = true, size = 40, className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark size={size} decorative={withWordmark} />
      {withWordmark && <span className="logo__wordmark">{BRAND_NAME}</span>}
    </span>
  )
}
