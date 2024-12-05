// Generated by Microsoft TypeSpec

import * as http from "node:http";

import { HttpContext } from "../../helpers/router.js";

import {
  Pets,
  PetCheckups,
  PetInsurance,
  Toys,
  ToyInsurance,
  Checkups,
  Owners,
  OwnerCheckups,
  OwnerInsurance,
} from "../../models/all/pet-store.js";

import {
  PetUpdate,
  PetCreate,
  CheckupUpdate,
  InsuranceUpdate,
  OwnerUpdate,
  OwnerCreate,
} from "../../models/all/typespec/rest/resource.js";

export async function pets_get(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Pets,
  petId: string,
): Promise<void> {
  const result = await operations.get(ctx, Number(petId));

  if ("age" in result && result.age >= 0 && result.age <= 20) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function pets_update(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Pets,
  petId: string,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const properties = (await new Promise(function parseProperties(
    resolve,
    reject,
  ) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as PetUpdate;

  const result = await operations.update(ctx, Number(petId), properties);

  if ("age" in result && result.age >= 0 && result.age <= 20) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function pets_delete(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Pets,
  petId: string,
): Promise<void> {
  const result = await operations.delete(ctx, Number(petId));

  if ("code" in result) {
    response.end(JSON.stringify(result));
  } else {
    response.statusCode = 200;
    response.end();
  }
}

export async function pets_create(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Pets,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const resource = (await new Promise(function parseResource(resolve, reject) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as PetCreate;

  const result = await operations.create(ctx, resource);

  if ("age" in result && result.age >= 0 && result.age <= 20) {
    response.end(JSON.stringify(result));
  } else if ("statusCode" in result && result.statusCode === 201) {
    response.statusCode = result.statusCode;
    delete (result as any).statusCode;
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function pets_list(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Pets,
): Promise<void> {
  const result = await operations.list(ctx);

  if ("value" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function pet_checkups_create_or_update(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: PetCheckups,
  petId: string,
  checkupId: string,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const resource = (await new Promise(function parseResource(resolve, reject) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as CheckupUpdate;

  const result = await operations.createOrUpdate(
    ctx,
    Number(petId),
    Number(checkupId),
    resource,
  );

  if ("id" in result) {
    response.end(JSON.stringify(result));
  } else if ("statusCode" in result && result.statusCode === 201) {
    response.statusCode = result.statusCode;
    delete (result as any).statusCode;
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function pet_checkups_list(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: PetCheckups,
  petId: string,
): Promise<void> {
  const result = await operations.list(ctx, Number(petId));

  if ("value" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function pet_insurance_get(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: PetInsurance,
  petId: string,
): Promise<void> {
  const result = await operations.get(ctx, Number(petId));

  if ("provider" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function pet_insurance_update(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: PetInsurance,
  petId: string,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const properties = (await new Promise(function parseProperties(
    resolve,
    reject,
  ) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as InsuranceUpdate;

  const result = await operations.update(ctx, Number(petId), properties);

  if ("provider" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function toys_get(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Toys,
  petId: string,
  toyId: string,
): Promise<void> {
  const result = await operations.get(ctx, Number(petId), BigInt(toyId));

  if ("id" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function toys_list(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Toys,
  petId: string,
): Promise<void> {
  const __query_params = new URLSearchParams(
    request.url!.split("?", 1)[1] ?? "",
  );

  const nameFilter = __query_params.get("nameFilter") ?? undefined;
  if (!nameFilter) {
    throw new Error(
      "Invalid request: missing required query parameter 'nameFilter'.",
    );
  }

  const result = await operations.list(ctx, Number(petId), nameFilter);

  if ("value" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function toy_insurance_get(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: ToyInsurance,
  petId: string,
  toyId: string,
): Promise<void> {
  const result = await operations.get(ctx, Number(petId), BigInt(toyId));

  if ("provider" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function toy_insurance_update(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: ToyInsurance,
  petId: string,
  toyId: string,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const properties = (await new Promise(function parseProperties(
    resolve,
    reject,
  ) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as InsuranceUpdate;

  const result = await operations.update(
    ctx,
    Number(petId),
    BigInt(toyId),
    properties,
  );

  if ("provider" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function checkups_create_or_update(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Checkups,
  checkupId: string,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const resource = (await new Promise(function parseResource(resolve, reject) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as CheckupUpdate;

  const result = await operations.createOrUpdate(
    ctx,
    Number(checkupId),
    resource,
  );

  if ("id" in result) {
    response.end(JSON.stringify(result));
  } else if ("statusCode" in result && result.statusCode === 201) {
    response.statusCode = result.statusCode;
    delete (result as any).statusCode;
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function checkups_list(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Checkups,
): Promise<void> {
  const result = await operations.list(ctx);

  if ("value" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function owners_get(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Owners,
  ownerId: string,
): Promise<void> {
  const result = await operations.get(ctx, BigInt(ownerId));

  if ("id" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function owners_update(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Owners,
  ownerId: string,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const properties = (await new Promise(function parseProperties(
    resolve,
    reject,
  ) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as OwnerUpdate;

  const result = await operations.update(ctx, BigInt(ownerId), properties);

  if ("id" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function owners_delete(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Owners,
  ownerId: string,
): Promise<void> {
  const result = await operations.delete(ctx, BigInt(ownerId));

  if ("code" in result) {
    response.end(JSON.stringify(result));
  } else {
    response.statusCode = 200;
    response.end();
  }
}

export async function owners_create(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Owners,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const resource = (await new Promise(function parseResource(resolve, reject) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as OwnerCreate;

  const result = await operations.create(ctx, resource);

  if ("id" in result) {
    response.end(JSON.stringify(result));
  } else if ("statusCode" in result && result.statusCode === 201) {
    response.statusCode = result.statusCode;
    delete (result as any).statusCode;
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function owners_list(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: Owners,
): Promise<void> {
  const result = await operations.list(ctx);

  if ("value" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function owner_checkups_create_or_update(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: OwnerCheckups,
  ownerId: string,
  checkupId: string,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const resource = (await new Promise(function parseResource(resolve, reject) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as CheckupUpdate;

  const result = await operations.createOrUpdate(
    ctx,
    BigInt(ownerId),
    Number(checkupId),
    resource,
  );

  if ("id" in result) {
    response.end(JSON.stringify(result));
  } else if ("statusCode" in result && result.statusCode === 201) {
    response.statusCode = result.statusCode;
    delete (result as any).statusCode;
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function owner_checkups_list(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: OwnerCheckups,
  ownerId: string,
): Promise<void> {
  const result = await operations.list(ctx, BigInt(ownerId));

  if ("value" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function owner_insurance_get(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: OwnerInsurance,
  ownerId: string,
): Promise<void> {
  const result = await operations.get(ctx, BigInt(ownerId));

  if ("provider" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}

export async function owner_insurance_update(
  ctx: HttpContext,
  request: http.IncomingMessage,
  response: http.ServerResponse,
  operations: OwnerInsurance,
  ownerId: string,
): Promise<void> {
  if (!request.headers["content-type"]?.startsWith("application/json")) {
    throw new Error(
      `Invalid Request: expected content-type 'application/json' but got '${request.headers["content-type"]?.split(";", 2)[0]}'.`,
    );
  }

  const properties = (await new Promise(function parseProperties(
    resolve,
    reject,
  ) {
    const chunks: Array<Buffer> = [];
    request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    request.on("end", function finalize() {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  })) as InsuranceUpdate;

  const result = await operations.update(ctx, BigInt(ownerId), properties);

  if ("provider" in result) {
    response.end(JSON.stringify(result));
  } else if ("code" in result) {
    response.end(JSON.stringify(result));
  }
}