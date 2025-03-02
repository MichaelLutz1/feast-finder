interface IngredientItemProps {
  icon: React.ReactNode
  name: string
  description: string
  checked: boolean
  toggleSelection: () => void
}

export default function IngredientItem({ icon, name, description, checked, toggleSelection }: IngredientItemProps) {
  return (
    <div className="flex items-center justify-between space-x-3">
      <div className="flex items-start space-x-3">
        <div className="mt-0.5 bg-muted rounded-md p-2">{icon}</div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleSelection}
        className="w-5 h-5 cursor-pointer"
      />
    </div>
  )
}
