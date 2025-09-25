import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


// Instead of writing like this, because these are related actions we can group them

// export const initGroceries=createAction('[Grocery]Load Groceries')
// export const completedGroceries=createAction('[Grocery]Load Groceries success')


// Grouping the Actions

 export const groceryAction= createActionGroup({
    source: "Grocery API",
    events: {
        'Load groceries':emptyProps,
        'Load grocercies success': props<{payload:Grocery[]}>(),
        'Load groceries failure': emptyProps,
    }
})