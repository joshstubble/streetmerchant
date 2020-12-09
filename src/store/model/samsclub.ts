
import {Store} from './store';

export const SamsClub: Store = {
	labels: {
		inStock: {
			container: 'li.b-product_status',
			text: ['in stock']
		},
		maxPrice: {
			container: '.b-price-value'
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.toysrus.ca/en/Hasbro-Gaming---Operation-Game---styles-may-vary/99D52A22.html'
		},
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.samsclub.com/p/ps5-bundle/prod24980178?xid=plp_product_2'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.samsclub.com/p/xbox-one-1tb-starter-bundle-microsoft-gaming/prod22302079?xid=plp_product_2'
		}
	],
	name: 'samsclub'
};
