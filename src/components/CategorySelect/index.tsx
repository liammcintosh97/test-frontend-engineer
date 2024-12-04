import Button from "../Button";
import { CategorySelectProps } from "./type";

export default function CategorySelect({categories, selectedCategory}: CategorySelectProps): JSX.Element {
  console.log('selectedCategory', selectedCategory)
  return (
    <div className="mb-4">
      <h2 className="text-l font-medium mb-2">Categories</h2>
      <div className="flex flex-row flex-wrap gap-4">
        <Button color={selectedCategory === undefined ? 'blue' : 'cyan'} href="/">All</Button>
        {categories.map((category) => (
          <Button color={category === selectedCategory ? 'blue' : 'cyan'} href={`?category=${category}`}>{category}</Button>
        ))}
      </div>
    </div>
  )
}