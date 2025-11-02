"use client"

export function RoomContent({ room }: { room: any }) {
  return (
    <div className="space-y-8 mb-12">
      <h2 className="text-3xl font-bold text-white">{room.content.title}</h2>

      {room.content.sections.map((section: any, index: number) => (
        <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">{section.heading}</h3>
          <p className="text-white/80 leading-relaxed">{section.text}</p>
        </div>
      ))}

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-medium text-white/90 mb-3">Monthly Content</h3>
        <p className="text-white/70 italic">New content for this room will be available on the 1st of each month.</p>
      </div>
    </div>
  )
}
