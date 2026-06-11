import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovRajasthandsa implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Rajasthandsa',
		name: 'N8nDevApisetuGovRajasthandsa',
		icon: { light: 'file:./apisetu-gov-rajasthandsa.svg', dark: 'file:./apisetu-gov-rajasthandsa.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Rajasthan\'s Social Justice Department now offers disability certificates via DigiLocker.',
		defaults: { name: 'Apisetu Gov Rajasthandsa' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovRajasthandsaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
