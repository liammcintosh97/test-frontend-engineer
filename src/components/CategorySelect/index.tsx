import Button from "../Button";
import { CategorySelectProps } from "./type";

export default function CategorySelect({categories, selectedCategory}: CategorySelectProps): JSX.Element {
  const color = 'bg-cyan-500 hover:bg-cyan-700'
  const selectedColor = 'bg-blue-500 hover:bg-blue-700'

  return (
    <div className="mb-8">
      <h2 className="text-l  text-slate-500 font-medium mb-2">Categories</h2>
      <div className="flex flex-row flex-wrap gap-4">
        <Button
          className={selectedCategory === undefined ? selectedColor : color}
          href="/">
            All
          </Button>
        {categories.map((category, index) => (
          <Button
            key={`category_${category}_${index}`}
            className={category === selectedCategory ? selectedColor : color}
            href={`?category=${category}`}>
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}