import FoodRecipe from '@/components/AnswerToQuestion/FoodRecipe/FoodRecipe';
import SearchFoodRecipe from '@/components/AnswerToQuestion/FoodRecipe/SearchFoodRecipe';
import RecommendFoodList from '@/components/AnswerToQuestion/RecommendFood.tsx/RecommendFoodList';

const AnswerToQuestion = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <RecommendFoodList />
      <SearchFoodRecipe />
      <FoodRecipe />
    </div>
  );
};

export default AnswerToQuestion;
