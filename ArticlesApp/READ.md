// slice/favoritesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
favorites: [],
};

export const favoritesSlice = createSlice({
name: 'favorites',
initialState,
reducers: {
deleteFavorite: (state, action) => {
const { id } = action.payload;
state.favorites = state.favorites.filter(favorite => favorite.id !== id);
},
},
});

export const { deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

// components/FavoriteItem.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../slice/favoritesSlice';

FavoriteItem = ({ id, name }) => {
const dispatch = useDispatch();

const handleDeleteFavorite = () => {
dispatch(deleteFavorite({ id }));
};

return (
<>
<>{name}</p>
< onClick={handleDeleteFavorite}>Delete</button>

</div>
);
};

export default FavoriteItem;

///////////////////////////////////////
// slice/favoritesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'https://myapi.com/favorites';

const initialState = {
favorites: [],
active: 'idle',
error: null,
};

export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async () => {
const response = await axios.get(API_ENDPOINT);
return response.data;
});

export const postFavorite = createAsyncThunk('favorites/postFavorite', async (name) => {
const response = await axios.post(API_ENDPOINT, { name });
return response.data;
});

export const deleteFavorite = createAsyncThunk('favorites/deleteFavorite', async (id) => {
await axios.delete(`${API_ENDPOINT}/${id}`);
return id;
});

export const favoritesSlice = createSlice({
name: 'favorites',
initialState,
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchFavorites.pending, (state) => {
state.active = 'loading';
})
.addCase(fetchFavorites.fulfilled, (state, action) => {
state.active = 'idle';
state.favorites = action.payload;
})
.addCase(fetchFavorites.rejected, (state, action) => {
state.active = 'idle';
state.error = action.error.message;
})
.add(postFavorite.pending, (state) => {
state.active = 'loading';
})
.addCase(postFavorite.fulfilled, (state, action) => {
state.active = 'idle';
state.favorites.push(action.payload);
})
.addCase(postFavorite.rejected, (state, action) => {
state.active = 'idle';
state.error = action.error.message;
})
.addCase(deleteFavorite.pending, (state) => {
state.active = 'loading';
})
.addCase(deleteFavorite.fulfilled, (state, action) => {
state.active = 'idle';
state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
})
.addCase(deleteFavorite.rejected, (state, action) => {
state.active = 'idle';
state.error = action.error.message;
});
},
});

export default favoritesSlice.reducer;

// components/FavoriteList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites, postFavorite, deleteFavorite } from '../slice/favoritesSlice';

const FavoriteList = () => {
const favorites = useSelector(state => state.favorites.favorites);
const active = useSelector(state => state.favorites.active);
const error = useSelector(state => state.favorites.error);
const dispatch = useDispatch();

const handleAddFavorite = async (event) => {
event.preventDefault();
const name = event.target.name.value.trim();
if (name) {
await dispatch(postFavorite(name));
event.target.name.value = '';
}
};

const handleDeleteFavorite = async (id) => {
await dispatch(deleteFavorite(id));
};

useEffect(() => {
dispatch(fetchFavorites());
}, [dispatch]);

if (active === 'loading') {
return <div>Loading...</div>;
}

if (error) {
return <div>Error: {error}</div>;
}

return (
<>
<>Favorite List</h2>
< onSubmit={handleAddFavorite}>
< type="text" name="name" placeholder="Enter favorite item" />
<button type="submit">Add</button>

</form>
{favorites.map(favorite => (
<div key={favorite.id}>
<>{favorite.name}</p>
< onClick={() => handleDeleteFavorite(favorite.id)}>Delete</button>
</div>
))}
</>
);
};

export default FavoriteList;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// slice/favoritesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'https://myapi.com/favorites';

initialState = {
favorites: [],
active: 'idle',
error: null,
};

export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async () => {
const response = await axios.get(API_ENDPOINT);
return response.data;
});

const favoriteToggleSlice = createSlice({
name: 'favoriteToggle',
initialState:,
reducers: {
toggleFavorite: (state) => {
return !state;
},
},
});

export const { toggleFavorite } = favoriteToggleSlice.actions;

export default favoriteToggleSlice.reducer;

export const postFavorite = createAsyncThunk('favorites/postFavorite', async (name) => {
const response = await axios.post(API_ENDPOINT, { name });
return response.data;
});

export const deleteFavorite = createAsyncThunk('favorites/deleteFavorite', async (id) => {
await axios.delete(`${API_ENDPOINT}/${id}`);
return id;
});

export const favoritesSlice = createSlice({
name: 'favorites',
initialState,
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchFavorites.pending, (state) => {
state.active = 'loading';
})
.addCase(fetchFavorites.fulfilled (state, action) => {
state.active = 'idle';
state.favorites = action.payload;
})
.addCase(fetchFavorites.rejected, (state, action) => {
state.active = 'idle';
state.error = action.error.message;
})
.addCase(postFavorite.fulfilled, (state, action) => {
state.active = 'idle';
state.favorites.push(action.payload);
})
.addCase(postFavorite.rejected, (state, action) => {
state.active = 'idle';
state.error = action.error.message;
})
.addCase(deleteFavorite.fulfilled, (state, action) => {
state.active = 'idle';
state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
})
.addCase(deleteFavorite.rejected, (state, action) => {
state.active = 'idle';
state.error = action.error.message;
});
},
});

export const favoriteSelector = state => state.favoriteToggle;
export const favoritesSelector = state => state.favorites.favorites;

export const favoriteAndFavoritesSelector = state => ({
favorite: favoriteSelector(state),
favorites: favoritesSelector(state),
});

// components/FavoriteList.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postFavorite, deleteFavorite, fetchFavorites, favoriteAndFavoritesSelector, toggleFavorite } from '../slice/favoritesSlice';

const FavoriteList = () => {
const { favorite, favorites } = useSelector(favoriteAndFavoritesSelector);
const active = useSelector(state => state.favorites.active);
const error = useSelector(state => state.favorites.error);
const dispatch = useDispatch();

const handleToggleFavorite = async () => {
if (favorite) {
await dispatch(deleteFavorite(favorite.id));
} else {
const name = prompt('Enter a favorite item:');
if (name) {
await dispatch(postFavorite(name));
}
}
dispatch(toggleFavorite());
};

useEffect(() => {
dispatch(fetchFavorites());
},dispatch]);

if (active === 'loading') {
return <>Loading...</div>;
}

if (error) {
return <>Error: {error}</div>;
}

return (
<>
<>Favorite List</h2>
< type="button" onClick={handleToggleFavorite}>{favorite ? 'Delete' : 'Add'}</button>
{favorites.map(favorite => (
<.namep>
))}
</>
);
};

export default FavoriteList;

<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

// slice/favoritesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'https://myapi.com/favorites';

initialState = {
favorites: [],
active: 'idle',
error: null,
isFavorite: false, // added new state to indicate whether an item is a favorite or not
};

export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async () => {
const response = await axios.get(API_ENDPOINT);
return response.data;
});

export const postFavorite = createAsyncThunk('favorites/postFavorite', async (name) => {
const response = await axios.post(API_ENDPOINT, { name return response.data;
});

export const deleteFavorite = createAsyncThunk('favorites/deleteFavorite', async (id) => {
await axios.delete(`${API_ENDPOINT}/${id}`);
return id;
});

export const favoritesSlice = createSlice({
name: 'favorites',
initialState,
reducers: {
toggleFavoriteState: (state) => {
// toggle isFavorite state when the button is clicked
state.isFavorite = !state.isFavorite;
},
},
extraReducers: (builder) => {
builder

.addCase(postFavorite.fulfilled, (state, action) => {
state.active = 'idle';
state.favorites.push(action.payload);
})

.addCase(deleteFavorite.fulfilled, (state, action) => {
state.active = 'idle';
state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
})

},
});

export const { toggleFavoriteState } = favoritesSlice.actions;

export const favoriteSelector = state => state.favorites.isFavorite;
export const favoritesSelector = state => state.favorites.favorites;

export const favoriteAndFavoritesSelector = state => ({
isFavorite: favoriteSelector(state),
favorites: favoritesSelector(state),
});

// components/FavoriteButton.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postFavorite, deleteFavorite, fetchFavorites, toggleFavoriteState, favoriteAndFavoritesSelector } from '../slice/favoritesSlice';

const FavoriteButton = () => {
const { isFavorite } = useSelector(favoriteAndFavoritesSelector);
const active = useSelector(state => state.favorites.active);
const error = useSelector(state => state.favorites.error);
const dispatch = useDispatch();

const handleToggleFavorite = async () => {
if (isFavorite) {
await dispatch(deleteFavorite(isFavorite.id));
} else {
const name = prompt('Enter a favorite item:');
if (name) {
await dispatch(postFavorite(name));
}
}
dispatch(toggleFavoriteState());
// dispatch an action that changes the button color when the state changes
const button = document.getElementById('favorite-button');
const backgroundColor = button.style.backgroundColor;
const newBackgroundColor = backgroundColor === 'red' ? 'gray' : 'red';
button.style.backgroundColor = newBackgroundColor;
};

useEffect(() => {
dispatch(fetchFavorites());
},dispatch]);

if (active === 'loading') {
return <>Loading...</div>;
}

if (error) {
return <>Error: {error}</div>;
}

return (
<>
<button id="favorite-button" type="button" onClick={handleToggleFavorite style={{ backgroundColor: isFavorite ? 'red' : 'gray' }}>
{isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
</button>
</>
);
};

export default FavoriteButton;
