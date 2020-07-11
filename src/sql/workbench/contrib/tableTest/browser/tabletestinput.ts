/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { EditorInput } from 'vs/workbench/common/editor';
import { IEditorModel } from 'vs/platform/editor/common/editor';
import { URI } from 'vs/base/common/uri';

export class SlickGridTableTestInput extends EditorInput {

	constructor(public readonly count: number) {
		super();
	}

	getTypeId(): string {
		return 'slicktabletest';
	}

	resolve(): Promise<IEditorModel> {
		return Promise.resolve(undefined);
	}

	get resource(): URI {
		return undefined;
	}
}

export class AsyncTableTestInput extends EditorInput {

	constructor(public readonly count: number) {
		super();
	}

	getTypeId(): string {
		return 'asynctabletest';
	}

	resolve(): Promise<IEditorModel> {
		return Promise.resolve(undefined);
	}

	get resource(): URI {
		return undefined;
	}
}
