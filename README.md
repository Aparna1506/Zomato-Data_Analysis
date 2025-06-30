# 🍽️ Zomato Data Analysis & Rating Prediction

This project analyzes a dataset of ~50,000 Zomato restaurant records to explore customer preferences, pricing trends, and rating patterns across different cities in India. It also includes a simple machine learning model to predict restaurant ratings based on selected features.

## 🔧 Technologies Used
- Python (Jupyter Notebook)
- Pandas, NumPy
- Seaborn, Matplotlib
- Scikit-learn (Linear Regression)

## 📌 Project Highlights

- **Data Cleaning:** Removed duplicates, handled missing values, and standardized column formats using Pandas and NumPy.
- **EDA:** Conducted exploratory data analysis with Matplotlib and Seaborn to visualize trends in cuisine, price range, votes, delivery options, and ratings.
- **Model Building:** Developed a Linear Regression model to predict restaurant ratings using features like average cost for two, user votes, and delivery availability.
- **Visualizations:** Created heatmaps, boxplots, and bar graphs to showcase data-driven insights that can guide business decisions.

## 🔍 Key Insights

- Online delivery services and diverse cuisine offerings tend to correlate with higher ratings.
- Mid-priced restaurants generally receive better customer reviews.
- Cities like Bangalore and Delhi show strong user engagement with food delivery.

## 📂 Files Included

- `Zomato_EDA.ipynb`: Notebook for cleaning and visualizing the data
- `Rating_Prediction_Model.ipynb`: Notebook for training and evaluating the regression model
- `data/zomato.csv`: Source dataset
- `visuals/`: Folder containing generated charts and graphs

This project is ideal for understanding how real-world datasets can be used for insight generation and basic predictive modeling in the food tech domain.
