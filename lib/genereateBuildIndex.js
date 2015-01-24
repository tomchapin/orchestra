var jade = require('jade')
	, fs = require('fs')
	, join = require('path').join
	, filesize = require('filesize')

	, builds = [{
		name: 'Release'
		, versions: getVersions('release')
	}, {
		name: 'Unstable'
		, versions: getVersions('unstable')
	}]

	, templatePath = join(__dirname, '..', 'templates', 'buildIndex.jade');


function getVersions(buildType) {
	var path = join(process.cwd(), buildType)
		, versions = [];

	fs.readdirSync(path).forEach(function(version) {
		var versionPath = join(path, version)
			, stats = fs.statSync(versionPath);

		if(stats.isDirectory()) {
			var version = {
				name: version
				, created: stats.ctime
				, files: []
			};

			fs.readdirSync(versionPath).forEach(function(file) {
				var filePath = join(versionPath, file)
					, stats = fs.statSync(filePath);

				version.files.push({
					name: file
					, path: join(buildType, version.name, file)
					, size: filesize(stats.size)
				});
			});
		}

		versions.push(version);
	});

	return versions;
}

builds = builds.filter(function(build) {
	return build.versions.length > 0;
});



fs.writeFileSync(
	join(process.cwd(), 'index.html')
	, jade.renderFile(templatePath, {builds: builds})
);
