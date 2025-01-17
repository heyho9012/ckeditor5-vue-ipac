#!/usr/bin/env node

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* eslint-env node */

require( '@ckeditor/ckeditor5-dev-release-tools' )
	.releaseSubRepositories( {
		cwd: process.cwd(),
		packages: null,
		dryRun: process.argv.includes( '--dry-run' )
	} );
