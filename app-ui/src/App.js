import drizzleOptions from './drizzleOptions';
import { Drizzle, generateStore } from '@drizzle/store';
import { DrizzleContext } from '@drizzle/react-plugin';

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

function App() {
	return (
		<DrizzleContext.Provider drizzle={drizzle}>
			<DrizzleContext.Consumer>
				{(drizzleContext) => {
					const { drizzle, drizzleState, initialized } = drizzleContext;

					if (!initialized) {
						return 'Loading...';
					}
					return <h1>Hello world</h1>;
				}}
			</DrizzleContext.Consumer>
		</DrizzleContext.Provider>
	);
}

export default App;
