import { DynamicIcon } from "@/components/icons/DynamicIcon";

export const colorMap = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600'
  }
} as const;

export type IconColor = keyof typeof colorMap;

interface FeatureCardProps {
  id: string;
  iconName: string;
  iconColor: IconColor;
  title: string;
  description: string;
}

const FeatureCard = ({ id, title, description, iconName, iconColor }: FeatureCardProps) => {
  const colors = colorMap[iconColor];

  return (
    <div
      id={id}
      className="bg-white p-8 rounded-lg shadow-md text-center"
      >
      <div className={`${colors.bg} ${colors.text} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <DynamicIcon name={iconName} className="h-8 w-8" size={24} color={iconColor} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard