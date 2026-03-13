import { useTheme } from '../contexts/ThemeContext'

export default function AppBackground() {
  const { theme } = useTheme()
  const videoSrc = theme === 'dark' ? '/b6.mp4' : '/b3.mp4'

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        key={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.92)',
        }}
      />
    </div>
  )
}
