export function resolveProjectStatusVariant(stat) {
  if (stat === 'Schedulled')
    return { status:'Non Demarré', color:'secondary' }
  if (stat === 'In Progress')
    return { status:'En Cours', color:'info' }
  if (stat === 'Stopped')
    return { status:'Suspendu', color:'warning' }
  if (stat === 'Failled')
    return { status:'Echec', color:'error' }
  if (stat === 'Finished')
    return { status:'Terminé', color:'success' }
}

export function resolveLocalDateVariant (d) {
  const date = new Date(d)
  const options = { year: 'numeric', month: 'short', day: '2-digit' }
  
  return date.toLocaleDateString('fr-FR', options)
}

export function resolveActivityProgression(activity) {
  return activity.finished/activity.nb*100
}

export function zerofill(number) {
  return number.toString().padStart(2, '0')
}

export function subStringNameForAvatar (name) {
  let split = name.split(" ", 2)
  
  return split[0] + " " + split[1]
}
