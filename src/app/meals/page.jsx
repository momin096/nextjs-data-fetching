import MealSearchInput from "./components/MealSearchInput";


export default async function MealsPage({ searchParams }) {
    const query = await searchParams

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            // setMeals(data?.meals || [])
            return data.meals;
        } catch (err) {
            console.log(err);
            return []
        }
    }

    const meals = await fetchMeals();

    return (
        <div>
            <div className='flex justify-center items-center my-5'>
                <MealSearchInput />
            </div>
            <div className='grid grid-cols-3 gap-5 '>
                {
                    meals?.map(meal => {
                        return (
                            <div className='bg-gray-800 rounded-2xl p-8 space-y-2'>
                                <p className='text-4xl font-bold'>{meal?.strMeal}</p>
                                <p className='font-bold'>{meal?.strCategory}</p>
                                <p>{meal?.strInstructions}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
