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

	if(fs.existsSync(path)) {
		fs.readdirSync(path).forEach(function(version) {
			var versionPath = join(path, version)
				, stats = fs.statSync(versionPath);

			if(stats.isDirectory()) {
				var timestamp = fs.readFileSync(join(versionPath, 'timestamp'), { encoding: 'utf-8' }).trim()
					, version = {
						name: version
						, created: new Date(Number(timestamp)*1000)
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

		versions = versions.sort(function(a, b) {
			return b.created - a.created;
		});
	}

	return versions;
}

builds = builds.filter(function(build) {
	return build.versions.length > 0;
});



fs.writeFileSync(
	join(process.cwd(), 'index.html')
	, jade.renderFile(templatePath, {builds: builds})
);
