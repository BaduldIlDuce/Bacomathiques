$(document).ready(function () {
    if ($('.adsbygoogle').filter(':visible').length === 0 && readCookie('adblock_modal_hide') === null) {
        showAdBlockDialog();
    }
});

function showAdBlockDialog() {
    let html = `
    <div id="modal-adblock" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-adblock-label" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-adblock-label">Soutenez le site</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                    <p>
                        Il semblerait que vous utilisiez un bloqueur de publicités... Veuillez noter que ce site ainsi que son contenu sont gratuits et mis à disposition de tout le monde librement. 
                        Nous ne demandons même pas de créer un compte ou autre : vous arrivez sur le site et vous lisez ce qu'il vous plait.
                    </p>
                    <p class="mb-0">
                        Ainsi, si vous souhaitez soutenir le développeur de ce site web, nous vous demandons de désactiver votre bloqueur de publicités.
                        Mais comme toujours, nous vous laissons le choix 😉
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="hideAdBlockDialog();">Ne plus afficher</button>
                </div>
            </div>
        </div>
    </div>
    `;

    $('body').append($(html));
    $('#modal-adblock').modal();
}

function hideAdBlockDialog() {
    $('#modal-adblock').on('shown.bs.modal', function (e) {
        $("#modal-adblock").modal("hide");
    });
    createCookie('adblock_modal_hide', true, 1461);
}