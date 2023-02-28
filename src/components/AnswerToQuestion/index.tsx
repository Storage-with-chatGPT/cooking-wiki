import RecommendFoodList from '@/components/AnswerToQuestion/\bRecommendFood.tsx/RecommendFoodList';
import FoodRecipe from '@/components/AnswerToQuestion/FoodRecipe/FoodRecipe';
import SearchFoodRecipe from '@/components/AnswerToQuestion/FoodRecipe/SearchFoodRecipe';

const AnswerToQuestion = () => {
  return (
    <div className="flex flex-col items-center">
      <RecommendFoodList />
      <SearchFoodRecipe />
      <FoodRecipe />
    </div>
  );
};

export default AnswerToQuestion;
