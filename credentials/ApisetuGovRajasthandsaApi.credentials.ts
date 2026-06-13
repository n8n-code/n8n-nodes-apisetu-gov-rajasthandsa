import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovRajasthandsaApi implements ICredentialType {
        name = 'N8nDevApisetuGovRajasthandsaApi';

        displayName = 'Apisetu Gov Rajasthandsa API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovRajasthandsa/apisetu-gov-rajasthandsa.svg', dark: 'file:../nodes/ApisetuGovRajasthandsa/apisetu-gov-rajasthandsa.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/rajasthandsa/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/rajasthandsa/v3',
                        description: 'The base URL of your Apisetu Gov Rajasthandsa API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
