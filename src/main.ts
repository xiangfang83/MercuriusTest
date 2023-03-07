import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpAaVldX2NLfUNwT2BfdV53ZCQ7a15RRnVfQV1kSXhQcEVrWnxccA==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRGQmVWfFN0RnNfdV12flVBcC0sT3RfQF5jSn5UdkNgX39Wc3JRQw==;ORg4AjUWIQA/Gnt2VVhkQlFacldJWXxPYVF2R2BJeVRzcl9GZ0wgOX1dQl9gSX1TcUVlWnleeHddQ2U=;MTI3MTE4NUAzMjMwMmUzNDJlMzBrREJ1NGdZOGxNSnczczFyaXBXSWlDNnB1djU2RDd4dkZjUWpEWW1jdDY0PQ==;MTI3MTE4NkAzMjMwMmUzNDJlMzBlSEtmOWp2RnlVemRTMzJVeHY5WjRjdmlBNExqNEd0TmhvTlJBdlBvR25ZPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmdWeEx0RWFab1h6d1NMYFtBNQtUQF1hSn5QdkJjX3xYcHxRQGJc;MTI3MTE4OEAzMjMwMmUzNDJlMzBvdTIxTFhjeGN6azhpNGhYUVg0UXFzUnhaYW1naFh0RnQrQWRtOHMrajhFPQ==;MTI3MTE4OUAzMjMwMmUzNDJlMzBmL25UeWFobU9ZNXJtb1BPUitpZUoxL1kvcUpTV3ViQUVFMG9SbytiajFnPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJWXxPYVF2R2BJeVRzcl9GZ0wgOX1dQl9gSX1TcUVlWnleeHFRRGA=;MTI3MTE5MUAzMjMwMmUzNDJlMzBpTnllbmtOUnAyTWtaaU5hcW1GZW8yR01HT0tBU0RVa0xpQVIxMERPM0hjPQ==;MTI3MTE5MkAzMjMwMmUzNDJlMzBVVDMycjFMTWdoTnIwSms2c045WnVZS2VNeFJyMjhWTStlTDhUNm9RSy80PQ==;MTI3MTE5M0AzMjMwMmUzNDJlMzBvdTIxTFhjeGN6azhpNGhYUVg0UXFzUnhaYW1naFh0RnQrQWRtOHMrajhFPQ==');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
