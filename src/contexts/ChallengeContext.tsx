import { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal'
import { api } from '../services/api'

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge | null
  isUpdatingData: boolean
  totalExperience: number
  startNewChallenge: () => void
  levelUp: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeLevelUpModal: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

interface Props {
  children: ReactNode
}

interface Data {
  currentExperience: number
  level: number
  challengesCompleted: number
  totalExperience: number
}

export function ChallengesProvider({ children }: Props) {
  const [data, setData] = useState<Data>({
    currentExperience: 0,
    level: 1,
    challengesCompleted: 0,
    totalExperience: 0,
  })
  const [isUpdatingData, setIsUpdatingData] = useState(false)
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((data.level + 1) * 4, 2)

  async function getData() {
    try {
      const profile = await api.get('/profile')
      const data = profile.data

      setData({
        currentExperience: data.currentExperience || 0,
        level: data.level || 1,
        challengesCompleted: data.challengesCompleted || 0,
        totalExperience: data.totalExperience || 0,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function updateData(data: any) {
    setIsUpdatingData(true)
    try {
      await api.put('/profile', data)
    } finally {
      setIsUpdatingData(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setIsLevelUpModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex] as Challenge
    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉:', {
        body: `Valendo ${challenge.amount} xp!`,
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  async function completeChallenge() {
    let level = data.level
    let currentExperience: number
    let challengesCompleted: number
    let totalExperience = data.totalExperience

    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = data.currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      level = data.level + 1
      levelUp()
    }

    currentExperience = finalExperience
    challengesCompleted = data.challengesCompleted + 1
    totalExperience += amount

    setData({
      currentExperience,
      level,
      challengesCompleted,
      totalExperience,
    })

    await updateData({
      currentExperience,
      level,
      challengesCompleted,
      totalExperience,
    })

    resetChallenge()
  }

  return (
    <ChallengesContext.Provider
      value={{
        level: data.level,
        challengesCompleted: data.challengesCompleted,
        currentExperience: data.currentExperience,
        totalExperience: data.totalExperience,
        isUpdatingData,
        startNewChallenge,
        levelUp,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
